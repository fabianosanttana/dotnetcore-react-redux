using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using WeRentCar.Data;

namespace WeRentCar
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();

            // Create the database if it does not exist
            new DatabaseContext().Database.EnsureCreated();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
