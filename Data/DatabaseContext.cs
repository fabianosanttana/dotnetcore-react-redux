using Microsoft.EntityFrameworkCore;
using WeRentCar.Data.EntityConfig;
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

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // Specify the path of the database here
            optionsBuilder.UseSqlite("Filename=./database.sqlite");
            base.OnConfiguring(optionsBuilder);
        }

        //Esta linha é usada para alterar a convenção da criação de tabelas no comando update-Database -Verbose, o entity por padrão cria os campos errados
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Method responsible for adding class configuration to project startup
            modelBuilder.ApplyConfiguration(new CustomerConfiguration());
            modelBuilder.ApplyConfiguration(new CarConfiguration());
            modelBuilder.ApplyConfiguration(new ReservationConfiguration());
        }

    }
}