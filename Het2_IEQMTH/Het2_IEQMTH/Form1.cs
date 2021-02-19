using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Het2_IEQMTH
{
    public partial class Form1 : Form
    {
        StudentEntities context = new StudentEntities();
        public Form1()
        {
            InitializeComponent();
            dgw1.DataSource = context.Students.Local;
        }

       
    }
}
