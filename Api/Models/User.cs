namespace Api.Models
{
    public class User
    {
        /// <summary>
        /// Identifier of the User
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Username of the User
        /// </summary>
        public string UserName { get; set; } = string.Empty;

        /// <summary>
        /// Email of the User
        /// </summary>
        public string UserEmail { get; set; }

        /// <summary>
        /// Hashed password of the User
        /// </summary>
        public string PasswordHash { get; set; } = string.Empty;

        /// <summary>
        /// Role of the User
        /// </summary>
        public string Role { get; set; } = "User";


    
    }
}
