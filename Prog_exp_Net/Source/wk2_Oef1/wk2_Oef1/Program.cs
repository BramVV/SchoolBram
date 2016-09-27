using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace wk2_Oef1
{
    class Program
    {
        static void Main(string[] args)
        {
            LightBulb bulp = new LightBulb() { IsOn = false };
            Switch swi = new Switch();
            Switch swi2 = new Switch();
            swi2.SwitchLight += test;
            swi.SwitchLight += test;
            swi.TurnOn(bulp);
            swi.TurnOff(bulp);
            swi2.TurnOn(bulp);
            Console.Read();
        }

        private static void test(bool value)
        {
            Console.WriteLine("Light is " + value);
        }
    }
}
