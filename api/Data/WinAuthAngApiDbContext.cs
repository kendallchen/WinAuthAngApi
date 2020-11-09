using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Data.Model;

namespace Data
{
    public class WinAuthAngApiDbContext : DbContext
    {
        public DbSet<Customer> Customer { get; set; }

        public WinAuthAngApiDbContext(DbContextOptions<WinAuthAngApiDbContext> options)
            : base(options)
        {
        }
    }
}
