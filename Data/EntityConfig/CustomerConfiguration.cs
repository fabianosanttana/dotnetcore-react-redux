using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WeRentCar.Entities;

namespace WeRentCar.Data.EntityConfig
{
    public class CustomerConfiguration : IEntityTypeConfiguration<Customer>
    { 
        public void Configure(EntityTypeBuilder<Customer> builder)
        {
            builder.HasKey(obj => obj.CustomerID);
            builder.HasIndex(obj => obj.Ssn).IsUnique();
        }
    }
}
