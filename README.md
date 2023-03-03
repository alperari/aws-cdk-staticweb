# Description

- This is an AWS CDK project written in TypeScript which aims to host a static website on AWS S3.
- In this project, i host a simple single-page and responsive website written with HTML/CSS/JS and [Bootstrap5](https://getbootstrap.com/).

> 💡 **Quick Reminder: What is Static Website?**
>
> - A static website is the website that has its source code prebuilt and returned by server without any database interaction.
> - Static websites don't use server-side scripting languages such as PHP, Python, Nodejs, etc.
> - They are light and fast.
>   ![arc](https://user-images.githubusercontent.com/68128434/222793100-96ac2869-98a2-4da4-9053-2ed70240a225.jpg)
> - More details: [Static vs Dynamic Websites](https://www.geeksforgeeks.org/static-vs-dynamic-website/)

# AWS CDK

There is just one stack which does the followings:

1. Create a bucket
2. Upload static content into that bucket and enable hosting by specifying index document = `index.html`

Once `cdk bootstrap` and `cdk deploy` are successful, we will have the static content hosted on AWS S3 with `index.html`'s Object URL as our domain.

### This project's URL: https://awscdkstaticwebstack-staticwebsitebucket7ef1e06c-qkwjo1gwr3yf.s3.eu-central-1.amazonaws.com/index.html
