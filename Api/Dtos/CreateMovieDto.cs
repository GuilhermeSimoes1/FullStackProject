﻿namespace Api.Dtos
{
    public class CreateMovieDto
    {
        public string Title { get; set; } = "";
        public string Genre { get; set; } = "";
        public int Year { get; set; }
        public string Director { get; set; } = "";
    }
}
