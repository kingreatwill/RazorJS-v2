@using System.IO;

var s = 'Hello at @DateTime.Now \n @File.ReadAllText(System.Web.Hosting.HostingEnvironment.MapPath("~/web.config")).Replace(System.Environment.NewLine, "\\n")';
s += 'from @Href("~/Models/Test")';
alert(s);
alert('@Url.Action("Index")')