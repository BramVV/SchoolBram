using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Office.Interop.Word;

namespace Oef
{
    class Person
    {
        public int age;
        public string name;
    }
    class Program
    {
        static void Main(string[] args)
        {
            var list = new List<Person>() {
                new Person() {
                    age=16,name="umama"
                },
                new Person() {
                    age=17,name="umama"
                },
                new Person() {
                    age=18,name="umama"
                },
                new Person() {
                    age=19,name="umama"
                },
                new Person() {
                    age=12,name="umama"
                }
            };
            MakeSum(list);
            BeetjeWord(list);
            Console.ReadLine();
        }

        private static void BeetjeWord(List<Person> list)
        {
            var app = new Application { Visible = true };
            var doc = app.ActiveDocument;

        }

        private static void MakeSum(List<Person> list)
        {
            var sumage = 0;
            foreach (var item in list)
            {
                sumage += item.age;
            }
            Console.WriteLine(sumage);
        }
    }
}
