namespace Api.Data
{
    using Api.Models;
    using Newtonsoft.Json;
    public static class DataSeeder
    {
        public static void Seed(AppDbContext context)
        {
            if(!context.Movies.Any())
            {
                var json = File.ReadAllText("movies.json");
                var movies = JsonConvert.DeserializeObject<List<Movie>>(json);

                context.Movies.AddRange(movies!);
                context.SaveChanges();
            }
        }

    }
}
