using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Data;
using Data.Model;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        public ICustomerData CustomerData { get; }

        public CustomerController(ICustomerData customerData)
        {
            CustomerData = customerData; 
        }

        // GET: api/Customer
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomers()
        {
            return Ok(await this.CustomerData.Get());
        }

        // GET: api/Customer/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Customer>> GetCustomer(int id)
        {
            return Ok(await this.CustomerData.GetCustomerById(id));
        }

        // PUT: api/Customer/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Customer>> PutCustomer(int id, Customer customer)
        {
            customer.UpdatedBy = HttpContext.User.Identity.Name;
            return Ok(await this.CustomerData.Update(customer));
        }

        // POST: api/Customer
        [HttpPost]
        public async Task<ActionResult<Customer>> PostCustomer(Customer customer)
        {
            customer.UpdatedBy = HttpContext.User.Identity.Name;
            return Ok(await this.CustomerData.Add(customer));
        }

        // DELETE: api/Customer/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<int>> DeleteCustomer(int id)
        {
            return Ok(await this.CustomerData.Delete(id));
        }
    }
}
