---
layout: post
title: "Identifiers in Java and It's Rules"
tags: "java"
date: 2025-01-10
---

Table of Contents
- TOC
{:toc}
<br>

## What is an Identifiers

A name in a java program is called an identifiers.
Which can be used for identification purpose only.
It can be used as a **class** name, **variable** name, **method** name, **label** name and **interface** name.

**Example:**
{% highlight java %}
public class Test {
    public static void main(String[] args) {
        int x = 100;
    }
}
{% endhighlight %}

There are 5 identifiers in the above example which are **Test**, **main**, **String**, **args**, and **x**.
<br><br>
 
## Rules for defining identifiers

⦿ The only allowed characters in identifiers are <br> 
**a-z A-Z 0-9 $ _**

   **Example:**
   {% highlight bash %} 
   Valid: myVariable, my_variable, my$variable, _myVariable
   Invalid: my-variable (because the hyphen - is not allowed), my variable (because spaces are not allowed)
   {% endhighlight %}
<br>
⦿ Identifiers can not starts with the digit<br>
**Example:**
   {% highlight bash %}
   Valid: x1, var2, myVariable_3
   Invalid: 1variable, 123abc (because these start with a number)
   {% endhighlight %}
<br>   
⦿ Identifiers are case-sensitive<br>
   **Example:**
   {% highlight bash %}
   Valid: MyVariable, myVariable, MYVARIABLE
   {% endhighlight %}
 <br>  
⦿ There is no length limit for an identifiers in java, but it is not recomended to take too lengthy identifiers.<br>
   **Example:**
   {% highlight bash %}
   Valid: myVariable, longVariableName, thisIsAVeryLongIdentifierThatIsStillValid
   but excessive length might reduce readability, such as thisIsAVeryLongIdentifierThatIsStillValidSoDontUseThisInProductionCode
   {% endhighlight %}
<br> 
⦿ Can not use reserved words as an identifiers in java<br>
   **Example:**
   {% highlight bash %}
   Valid: myInt, className, publicVar
   Invalid: int, class, public, if, true, void (because these are reserved keywords in Java) 
   {% endhighlight %}
<br>   
⦿ All predefined java class and interface names can use as an indentifiers, but it is not a good programming practice and it reduces the readability of the code.<br>
   **Example:**
   {% highlight bash %}
   Valid (but not recommended): String, Integer, System, Thread
   {% endhighlight %}
<br>   
   

## Valid and Invalid Identifiers
<br>
### Valid Identifiers:
{% highlight bash %}
x
myVariable
my_variable
my$variable
MyClass
variable123
_underscoreVariable
StringName
ThreadClass
longVariableNameWithValidChars
{% endhighlight %}
<br>

### Invalid Identifiers:
{% highlight bash %}
1variable (starts with a digit)
my-variable (contains hyphen -)
my variable (contains a space)
int (reserved word)
public (reserved word)
true (reserved word)
123abc (starts with a digit)
@myVariable (contains special character @)
class (reserved word)
System (while technically allowed, it’s discouraged to use predefined class names like this)
{% endhighlight %}
<br>

## Demo

{% include video.html video="https://www.youtube.com/embed/fqFjuX4VZ" %}
<br>