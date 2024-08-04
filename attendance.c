#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char stuName[20][30];
int presentAttendance[20] = {0};
int absentAttendance[20] = {0};
int indexNumber = 0;

void checkAttendance()
{
    int i;
    printf("\n Total Present | Total Absent\n");
    for (i = 0; i < indexNumber; i++)
    {
        printf("%s", stuName[i]);
        printf(" %d %d\n", presentAttendance[i], absentAttendance[i]);
    }
}

void addStudent()
{
    int i, num;
    printf("Enter how many students you want to add: ");
    scanf("%d", &num);
    getchar(); 
    for (i = indexNumber; i < indexNumber + num; i++)
    {
        if (i >= 20)
        {
            printf("Cannot add more students. Maximum capacity reached.\n");
            break;
        }
        printf("\nEnter %d student name to add in attendance register: ", i + 1);
        fgets(stuName[i], 30, stdin);
        stuName[i][strcspn(stuName[i], "\n")] = '\0'; 
    }
    indexNumber += num;
}

void removeStudent()
{
    char name[30];
    printf("Enter student name to remove: ");
    getchar();
    fgets(name, 30, stdin);
    name[strcspn(name, "\n")] = '\0'; 
    for (int i = 0; i < indexNumber; i++)
    {
        if (strcmp(name, stuName[i]) == 0)
        {
            for (int j = i; j < indexNumber - 1; j++)
            {
                strcpy(stuName[j], stuName[j + 1]);
                presentAttendance[j] = presentAttendance[j + 1];
                absentAttendance[j] = absentAttendance[j + 1];
            }
            indexNumber--;
            printf("\n%s student is removed\n", name);
            return;
        }
    }
    printf("This name does not exist\n");
}


void takeAttendance()
{
    int i;
    char ch;
    printf("\nEnter Y for present and N for absent\n");
    for (i = 0; i < indexNumber; i++)
    {
    repeat:
        printf("%d. %s is present: ", i + 1, stuName[i]);
        scanf(" %c", &ch);
        if (ch == 'Y' || ch == 'y')
        {
            presentAttendance[i] += 1;
        }
        else if (ch == 'N' || ch == 'n')
        {
            absentAttendance[i] += 1;
        }
        else
        {
            printf("Invalid character. Try again\n");
            goto repeat;
        }
    }
}

int main()
{
    int choose;
    do
    {
        printf("\n********** Main Menu ***********\n");
        printf("Enter 1 for add student\n");
        printf("Enter 2 for take attendance\n");
        printf("Enter 3 for check attendance\n");
        printf("Enter 4 for remove student\n");
        printf("Enter 5 for exit\n");
        printf("Please choose any menu: ");
        scanf("%d", &choose);
        switch (choose)
        {
        case 1:
            addStudent();
            break;
        case 2:
            takeAttendance();
            break;
        case 3:
            checkAttendance();
            break;
        case 4:
            removeStudent();
            break;
        case 5:
            exit(0);
        default:
            printf("Invalid choice. Please try again.\n");
        }
    } while (choose != 5);

    return 0;
}