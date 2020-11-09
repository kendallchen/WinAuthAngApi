using Data.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Data
{
    public interface ICustomerData
    {
        Task<IEnumerable<Customer>> Get();
        Task<Customer> GetCustomerById(int id);
        Task<Customer> Update(Customer customer);
        Task<Customer> Add(Customer customer);
        Task<int> Delete(int customerId);
    }
}
