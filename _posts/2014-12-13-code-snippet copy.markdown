---
layout: post
title: "How to Create a Simple Grails Application"
date: 2024-11-01
---

**Table of Contents**
- TOC
{:toc}
<br>

## Introduction

Creating a simple Grails application is a straight-forward process. Here’s a quick step-by-step guide to get you started.
 
And this process is applicable for both VS Code and Intellij Ultimate Edition IDE.
<br>
<br>

## What is the Grails Framework

Grails is an open-source web application framework that uses Groovy, a dynamic programming language for the Java platform.

It is designed to simplify and accelerate web application development by providing a
**convention-over-configuration** approach, built on top of popular technologies like **Spring**, **Hibernate**, and **GSP**(Groovy Server Pages).

Grails is particularly useful for building scalable, enterprise-grade web applications with minimal configuration and boilerplate code, making it ideal for rapid application development.
<br>
<br>

## How to Install Grails

First, make sure you have Java Development Kit **(JDK)** installed on your system.

Next, download and install the **Grails Framework** from the official site or use a tool like **SDKMAN!** to manage your Grails installation.

**Install:** Download and install Grails -> [Go to Download Page](https://grails.org/download.html){:target="\_blank"}
<br>
<br>

## How to Set Up a New Project

Open a terminal or command prompt and
Run the following command to create a new Grails application:

{% highlight bash %}
grails create-app myapp
{% endhighlight %}

Replace "**myapp**" with the name you want for your application.
<br>
<br>

## Next Step
Move to the newly created project directory

{% highlight java %}
public class BubbleSort {
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        bubbleSort(arr);
        System.out.println("Sorted array:");
        for (int value : arr) {
            System.out.print(value + " ");
        }
    }

static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // swap arr[j] and arr[j + 1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}

{% endhighlight %}
<br>

## How to Run the Application

Start the Grails application with the following command

{% highlight bash %}
grails run-app
{% endhighlight %}

This will start the embedded server and you can access your application at **http://localhost:8080**.

Once the server is running, open your browser and go to **http://localhost:8080**. You should see the default Grails welcome page, indicating that your application is running successfully.
<br>
<br>

## How to Stop the Application

When you're done, you can stop the Grails server by pressing **CTRL + C** in the terminal where it's running.
<br>
<br>

## Demo

{% include video.html video="https://www.youtube.com/embed/fqFjuX4VZmU" %}
<br>

## Conclusion

You've successfully created and run a simple Grails application.
<br>
<br>

_Keep learning and happy coding!_
