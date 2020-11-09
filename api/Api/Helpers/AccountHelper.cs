using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System.Security.Principal;

namespace Api.Helpers
{
    public class AccountHelper
    {
        /// <summary>
        /// Returns the name of the windows account
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        public static string GetWinAuthAccount(HttpContext context)
        {
            IPrincipal p = context.User;
            return p.Identity.Name;
        }
    }
}
