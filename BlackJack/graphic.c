#include<stdio.h>
int main()
{
    int num;
    printf("enter number");
    scanf("%d",&num);
    int res;
    for(int i=1;i<=10;i++)
    {
        res=num*i;
        printf("%d x %d = %d\n",num,i,res);
    }
    return 0;

}