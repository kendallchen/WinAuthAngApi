using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Security.Principal;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        // GET: api/<AccountController>
        [HttpGet]
        public string Get()
        {
            IPrincipal p = HttpContext.User;
            return p.Identity.Name;
        }

    }
}
