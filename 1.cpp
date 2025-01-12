#include <iostream>
#include <vector>

int main()
{
    int t;
    std::cin >> t;

    for (int loop = 0; loop < t; loop++)
    {
        std::string str;
        std::cin >> str;
        int countA = 0, countB = 0;

        for (char ch : str)
        {
            if (ch == 'A')
            {
                countA++;
            }
            else
            {
                countB++;
            }
        }

        if (countA > countB)
        {
            std::cout << "A" << std::endl;
        }
        else
        {
            std::cout << "B" << std::endl;
        }
    }
}