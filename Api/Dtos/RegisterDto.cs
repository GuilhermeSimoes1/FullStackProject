namespace Api.Dtos
{
    public class RegisterDto
    {

        /// <summary>
        /// Username of the User
        /// </summary>
        public string UserName { get; set; } = string.Empty;

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
