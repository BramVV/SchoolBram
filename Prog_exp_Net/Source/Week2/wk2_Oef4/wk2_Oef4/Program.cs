using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Timers;

namespace wk2_Oef4
{
    class Program
    {
        public static TemperatureSensor temps;
        static void Main(string[] args)
        {
            temps = new TemperatureSensor();
            temps.ReadTempEvent += read;
            Timer timer = new Timer();
            timer.Interval = 1000;
            timer.Start();
            Console.Read();
        }
        private static void read(double value)
        {
            Console.WriteLine("Temp is: {0}", value);
        }
        private static void OnTimedEvent(Object source, System.Timers.ElapsedEventArgs e)
        {
            temps.ReadTemp();
        }
    }
}
