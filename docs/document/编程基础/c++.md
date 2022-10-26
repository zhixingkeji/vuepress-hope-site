## 第1章 简介



## 第2章 基础

### 2.1 基本语法

```c++
//引入头文件
#include <iostream>

//命名空间
using namespace std;
 
// 注释语法

/*
 * 多行注释
 */

// main() 是程序开始执行的地方
int main()
{
   cout << "Hello World"; // 输出 Hello World
   return 0; //程序结束
}
```



### 2.2 数据类型

enum 

int 

float 

double 

bool 

char 

void



### 2.3 变量作用域

全局变量 局部变量



### 2.4 常量

使用预编译器

```c++
#define LENGTH 10
```



使用const关键字

```c++
 const int  WIDTH  = 5;
```



### 2.6 运算符

- 算术运算符

```
+ - * / % ++ --
```



- 关系运算符

```c++
== != > < >= <=
```



- 逻辑运算符

```c++
&& || !
```



- 位运算符

```
&
|
^
~
<< 
>>
```



- 赋值运算符

```c++
= 
+=
-=
```



- 杂项运算符

```
sizeof 
a?c:b 
& 
* 
```





### 2.5 循环

```
while
do while
for
```



### 2.6 判断

```
if
if else
switch
```



### 2.7 函数

```c++
int max(int num1, int num2) 
{
   // 局部变量声明
   int result;
   if (num1 > num2)
      result = num1;
   else
      result = num2;
   return result; 
}
```



带默认值

```c++
// 使用max(a) 
int max(int num1, int num2 = 10) {
   // 局部变量声明
   int result;
   if (num1 > num2)
      result = num1;
   else
      result = num2;
   return result; 
}
```



### 2.8 数组

```
double balance[5] = {1000.0, 2.0, 3.4, 7.0, 50.0};
```



### 2.9 字符串

```
string str1 = "runoob";
```



### 2.10 指针

```
int main ()
{
   int  var = 20;   // 实际变量的声明
   int  *ip;        // 指针变量的声明
 
   ip = &var;       // 在指针变量中存储 var 的地址
 
   cout << "Value of var variable: ";
   cout << var << endl;
 
   // 输出在指针变量中存储的地址
   cout << "Address stored in ip variable: ";
   cout << ip << endl;
 
   // 访问指针中地址的值
   cout << "Value of *ip variable: ";
   cout << *ip << endl;
 
   return 0;
}
```



### 2.11 引用

```
   // 声明简单的变量
   int    i;

   // 声明引用变量
   int&    r = i;
 
   i = 5;
```



### 2.12 输入输出

```
char name[50];

//输出流
cout << "请输入您的名称： ";

//输入流
cin >> name;
cout << "您的名称是： " << name << endl;

//错误流
 cerr << "Error message : " << str << endl;
 
 //日志流
 clog << "Error message : " << str << endl;
```



### 2.13 结构

```
// 声明一个结构体类型 Books 
struct Books
{
   char  title[50];
   char  author[50];
   char  subject[100];
   int   book_id;
};
```







## 第3章  面向对象

### 3.1 类

```c++
class Box
{
   public:
      double length;   // 长度
      double breadth;  // 宽度
      double height;   // 高度
      // 成员函数声明
      double get(void);
      void set( double len, double bre, double hei );
};
```



### 3.2 继承

```c++
class Rectangle: public Shape {
  	public:
    		int getArea(){ 
        return (width * height); 
    }
}
```



### 3.3 重载

```c++
class printData
{
   public:
      void print(int i) {
        cout << "整数为: " << i << endl;
      }
 
      void print(double  f) {
        cout << "浮点数为: " << f << endl;
      }
 
      void print(char c[]) {
        cout << "字符串为: " << c << endl;
      }
};
```





### 3.4 多态

```c++
class Shape {
   protected:
      int width, height;
   public:
      Shape( int a=0, int b=0)
      {
         width = a;
         height = b;
      }
      int area()
      {
         cout << "Parent class area :" <<endl;
         return 0;
      }
};
class Rectangle: public Shape{
   public:
      Rectangle( int a=0, int b=0):Shape(a, b) { }
      int area ()
      { 
         cout << "Rectangle class area :" <<endl;
         return (width * height); 
      }
};
class Triangle: public Shape{
   public:
      Triangle( int a=0, int b=0):Shape(a, b) { }
      int area ()
      { 
         cout << "Triangle class area :" <<endl;
         return (width * height / 2); 
      }
};
```





### 3.5 接口

```c#
// 基类
class Shape {
		public:
   // 提供接口框架的纯虚函数
				virtual int getArea() = 0;
}
```







## 第4章 高级教程

### 4.1 文件和流



### 4.2 异常处理



```c++
try{
   // 保护代码
}catch(...){
  // 能处理任何异常的代码
}
```





### 4.3 动态内存

```c++
#include <iostream>
using namespace std;
 
int main ()
{
   double* pvalue  = NULL; // 初始化为 null 的指针
   pvalue  = new double;   // 为变量请求内存
 
   *pvalue = 29494.99;     // 在分配的地址存储值
   cout << "Value of pvalue : " << *pvalue << endl;
 
   delete pvalue;         // 释放内存
 
   return 0;
}
```





### 4.4 命名空间

```c++
#include <iostream>
using namespace std;
 
// 第一个命名空间
namespace first_space{
   void func(){
      cout << "Inside first_space" << endl;
   }
}
// 第二个命名空间
namespace second_space{
   void func(){
      cout << "Inside second_space" << endl;
   }
}
int main ()
{
 
   // 调用第一个命名空间中的函数
   first_space::func();
   
   // 调用第二个命名空间中的函数
   second_space::func(); 
 
   return 0;
}
```



### 4.5 模板

```c++
#include <iostream>
#include <string>
 
using namespace std;
 
template <typename T>
inline T const& Max (T const& a, T const& b) 
{ 
    return a < b ? b:a; 
} 
int main ()
{
 
    int i = 39;
    int j = 20;
    cout << "Max(i, j): " << Max(i, j) << endl; 
 
    double f1 = 13.5; 
    double f2 = 20.7; 
    cout << "Max(f1, f2): " << Max(f1, f2) << endl; 
 
    string s1 = "Hello"; 
    string s2 = "World"; 
    cout << "Max(s1, s2): " << Max(s1, s2) << endl; 
 
    return 0;
}
```



### 4.6 预处理器

```c++
#define PI 3.14159
```



### 4.7 信号处理

### 4.8 多线程

### 4.9 web编程





## 第5章 资源库





## 第6章 UE引擎