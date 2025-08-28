    namespace Api.Dtos
{
    public class MovieDto
    {
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
        /// Path of the image
        /// </summary>
        public string? ImageUrl { get; set; } = "";
    }
}
