using Microsoft.EntityFrameworkCore;
using WeRentCar.Entities;

namespace WeRentCar.Data
{
    /// <summary>
    /// This class handles the sqlite database
    /// </summary>
    public class DatabaseContext : DbContext
    {

        /// <summary>
        /// This properties allows to manipulate the tables
        /// </summary>
        public DbSet<Client> Clients { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // Specify the path of the database here
            optionsBuilder.UseSqlite("Filename=./database.sqlite");
        }

    }
}
