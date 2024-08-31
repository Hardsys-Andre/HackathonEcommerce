using Microsoft.EntityFrameworkCore;
using TaNaCesta.Domain.Entities;

namespace TaNaCesta.Infrastructure.DataAccess
{
    public class TaNaCestaDbContext : DbContext
    {
        public TaNaCestaDbContext(DbContextOptions options) : base(options) 
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(TaNaCestaDbContext).Assembly);
        }
    }
}