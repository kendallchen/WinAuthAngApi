using Data.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Data
{
    public class SqlCustomerData : ICustomerData
    {
        public WinAuthAngApiDbContext DbContext { get; }

        public SqlCustomerData(WinAuthAngApiDbContext dbContext)
        {
            DbContext = dbContext;
        }

        public async Task<Customer> Add(Customer customer)
        {
            DbContext.Add(customer);
            await DbContext.SaveChangesAsync();
            return customer;
        }

        public async Task<int> Delete(int customerId)
        {
            Customer c = await this.GetCustomerById(customerId);
            if (c != null)
            {
                this.DbContext.Remove(c);
                await DbContext.SaveChangesAsync();
                return customerId;
            }
            return -1;
        }

        public async Task<IEnumerable<Customer>> Get()
        {
            return await DbContext.Customer.ToListAsync();
        }

        public async Task<Customer> GetCustomerById(int id)
        {
            Customer c = await this.DbContext.Customer.FindAsync(id);
            if (c != null)
                return c;
            return null;
        }

        public async Task<Customer> Update(Customer customer)
        {
            Customer c = await GetCustomerById(customer.CustomerId);
            if (c != null)
            {
                c.FirstName = customer.FirstName;
                c.LastName = customer.LastName;
                c.UpdatedBy = customer.UpdatedBy;
                await DbContext.SaveChangesAsync();
                return c;
            }
            return null;
        }
    }
}
