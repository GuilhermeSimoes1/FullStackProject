using Microsoft.AspNetCore.Mvc;
using Api.Data;
using Api.Models;
using Api.Services;
using Api.Dtos;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.IdentityModel.Tokens.Jwt;

namespace Api.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IConfiguration _config;
    
    public AuthController(IConfiguration config, AppDbContext context)
    {

        _context = context;
        _config = config;
    }

    [HttpPost]
    public async Task<IActionResult> Register([FromBody] RegisterDto dto)
    {

        if(_context.Users.Any(u => u.UserName == dto.UserName))
        {
            return BadRequest("This username is already in use, choose another one");
        }

        if(_context.Users.Any(u => u.UserEmail == dto.UserEmail))
        {
            return BadRequest("This email is already registered");
        }

        var user = new User {
            UserName = dto.UserName,
            PasswordHash = PasswordHasher.HashPassword(dto.Password),
            UserEmail = dto.UserEmail,
            Role = "User"
        };

        try
        {
           _context.Users.Add(user);
           await _context.SaveChangesAsync();
            return Ok("User registered sucessfully");
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Error to regist the user: {ex.Message}");
        }
            
        }


        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginDto dto)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.UserEmail == dto.UserEmail);
            
            if (user == null)
            {
                return Unauthorized("User not found");
            }

            if (!PasswordHasher.VerifyPassword(dto.Password, user.PasswordHash))
            {
                return Unauthorized("Password is incorrect")´;
            }

            var claims = new[]
            {

            new Claim(ClaimTypes.Name, user.UserName),
            new Claim(ClaimTypes.Email, user.UserEmail),
            new Claim(ClaimTypes.Role, user.Role)

            };

            var jwtKey = _config["Jwt:Key"] ?? throw new Exception("JWT Key not defined");
            var issuer = _config["Jwt:Issuer"];
            var audience = _config["Jwt:Audience"];
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: issuer,
                audience: audience,
                claims: claims,
                expires: DateTime.UtcNow.AddHours(2),
                signingCredentials: creds
            ); 
            
            var tokenString = new JwtSecurityTokenHandler().WriteToken(token);

            return Ok(new

                {
                    token = tokenString,
                    user = user.UserName,
                    role = user.Role
                }
                
            );
        }
    }




