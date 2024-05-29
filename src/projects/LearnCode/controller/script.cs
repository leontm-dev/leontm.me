using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace ProgrammingLanguage
{
    public class Script
    {
        bool nextLine = true;
        int integer = 0;

        // The "codefile"
        string code = File.ReadAllText(@"Test.txt");    // link on local PC to .txt file
        // Cutting the code
        string[] tokensArray = new string[0];
        List<string> tokens = new List<string>();

        // Variable
        public Dictionary<string, string> variable = new Dictionary<string, string>();

        // "Programming Language"
        Dictionary<string, Action> keywords = new Dictionary<string, Action>();

        public void Start()
        {
            keywords = new Dictionary<string, Action>
            {
                ["erstelle"] = () =>
                {
                    nextLine = Create();
                },
                ["setze"] = () =>
                {
                    nextLine = Set();
                },
                ["addiere"] = () =>
                {
                    nextLine = Calculate("+");
                },
                ["subrahiere"] = () =>
                {
                    nextLine = Calculate("-");
                },
                ["multipliziere"] = () =>
                {
                    nextLine = Calculate("*");
                },
                ["dividiere"] = () =>
                {
                    nextLine = Calculate("/");
                },
                ["schreibe"] = () =>
                {
                    nextLine = Write();
                }
            };

            string result = Regex.Replace(code, @"\t|\n|\r", "");
            tokensArray = result.Split(' ');
            tokens = tokensArray.ToList();

            LineByLine();
        }

        void LineByLine()   //async void ...
        {
            for (integer = 0; integer < tokens.Count - 1; integer++)
            {
                nextLine = false;

                if (keywords.ContainsKey(tokens[integer]))
                {
                    keywords[tokens[integer]]();
                }
                else
                {
                    nextLine = true;
                    Console.WriteLine("Missing: " + tokens[integer + 1]);
                    // TODO: ERROR not found keyword
                }

                while (!nextLine)
                {
                    //await Task.Delay(25);
                }
            }
        }

        bool Create()
        {
            if (!variable.ContainsKey(tokens[integer + 1]))
            {
                variable.Add(tokens[integer + 1], "0");     // Variable is always 0 at first
                integer++;
            }
            else
            {
                Console.WriteLine("An element with Key " + tokens[integer + 1] + " already exists.");
            }

            return true;
        }

        bool Set()
        {
            if (variable.ContainsKey(tokens[integer + 1]))
            {
                variable[tokens[integer + 1]] = tokens[integer + 3];  // TODO: ERROR Out of bounds, ...
                integer += 3;
            }
            else
            {
                Console.WriteLine("No variable with the name " + tokens[integer + 1] + " found!");
            }

            return true;
        }

        bool Calculate(string operatorS)
        {
            if (variable.ContainsKey(tokens[integer + 1]))
            {
                double value;
                switch (operatorS)
                {
                    case "+":
                        value = Convert.ToDouble(variable[tokens[integer + 1]]) + Convert.ToDouble(tokens[integer + 3]);    // TODO: ERROR if not possible to convert
                        variable[tokens[integer + 1]] = value.ToString();  // TODO: ERROR Out of bounds, ...
                        integer += 3;
                        break;
                    case "-":
                        value = Convert.ToDouble(variable[tokens[integer + 1]]) - Convert.ToDouble(tokens[integer + 3]);    // TODO: ERROR if not possible to convert
                        variable[tokens[integer + 1]] = value.ToString();  // TODO: ERROR Out of bounds, ...
                        integer += 3;
                        break;
                    case "*":
                        value = Convert.ToDouble(variable[tokens[integer + 1]]) * Convert.ToDouble(tokens[integer + 3]); // TODO: ERROR if not possible to convert
                        variable[tokens[integer + 1]] = value.ToString();  // TODO: ERROR Out of bounds, ...
                        integer += 3;
                        break;
                    case "/":
                        value = Convert.ToDouble(variable[tokens[integer + 1]]) / Convert.ToDouble(tokens[integer + 3]); // TODO: ERROR if not possible to convert
                        variable[tokens[integer + 1]] = value.ToString();  // TODO: ERROR Out of bounds, ...
                        integer += 3;
                        break;
                    default:
                        // TODO: ERROR wrong operator
                        break;
                }
            }
            else
            {
                Console.WriteLine("No variable with the name " + tokens[integer + 1] + " found!");
            }

            return true;
        }

        bool Write()
        {
            string value;
            if (variable.TryGetValue(tokens[integer + 1], out value))
            {
                Console.WriteLine(tokens[integer + 1] + " : " + value);
            }
            else
            {
                // TODO: Error
            }
            integer++;

            return true;
        }
    }
}