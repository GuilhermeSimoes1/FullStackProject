namespace Api.Dtos
{
    public class LoginDto
    {
        /// <summary>
        /// Email of the User
        /// </summary>
        public string UserEmail { get; set; }

        /// <summary>
        /// Password of the User
        /// </summary>
        public string Password { get; set; } = string.Empty;

    }
}
