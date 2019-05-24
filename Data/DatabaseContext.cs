using Microsoft.EntityFrameworkCore;
using WeRentCar.Entities;

namespace WeRentCar.Data {
    /// <summary>
    /// This class handles the sqlite database
    /// </summary>
    public class DatabaseContext : DbContext {
        private static bool _created = false;
        public DatabaseContext () {
            if (!_created) {
                Database.EnsureDeleted ();
                Database.EnsureCreated ();
                _created = true;
            }
        }
        /// <summary>
        /// This properties allows to manipulate the tables
        /// </summary>
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Car> Cars { get; set; }
        public DbSet<Reservation> Reservation { get; set; }

        protected override void OnConfiguring (DbContextOptionsBuilder optionsBuilder) {
            // Specify the path of the database here
            optionsBuilder.UseSqlite ("Filename=./database.sqlite");
            base.OnConfiguring (optionsBuilder);
        }
    }
}