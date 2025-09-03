using Microsoft.AspNetCore.Mvc;
using Api.Data
namespace Api.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _db;
        
        public AuthController(AppDbContext db)
        {
            _db = db;
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody] RegisterDto dto)
        {
            //Fazer lógica
        }


        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginDto dto)
        {
            // Fazer lógica
        }
    }
}
