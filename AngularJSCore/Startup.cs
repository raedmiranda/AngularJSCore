using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJSCore
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // Servir docuemento por defecto de la carpeta wwwroot https://docs.microsoft.com/en-us/aspnet/core/fundamentals/static-files?view=aspnetcore-5.0#static-file-authorization
            // Prueba con ngRoute
            app.UseDefaultFiles();

            // Son archivos html estáticos
            app.UseStaticFiles();

            // Comentado para usar enrutado con ngRoute
            //app.UseRouting();

            //app.UseEndpoints(endpoints =>
            //{
            //    endpoints.MapDefaultControllerRoute();

            //    //endpoints.MapGet("/", async context =>
            //    //{
            //    //    await context.Response.WriteAsync("Hello World!");
            //    //});
            //});
        }
    }
}
