namespace Api.Dtos
{
    public class CreateMovieDto
    {
        /// <summary>
        /// Identifier of the movie
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Title of the movie
        /// </summary>
        public string Title { get; set; } = "";

        /// <summary>
        /// Genre of the movie
        /// </summary>
        public string Genre { get; set; } = "";

        /// <summary>
        /// Year when the movie was released
        /// </summary>
        public int Year { get; set; }

        /// <summary>
        /// Director of the movie
        /// </summary>
        public string Director { get; set; } = "";

        /// <summary>
        /// Cover image of the movie
        /// </summary>
        public IFormFile? Image { get; set; }

        /// <summary>
        /// Description of the movie
        /// </summary>
        public string Description { get; set; } = "";
    }
}
