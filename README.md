# 🧾 Mexuri Website — Technical Documentation

## Overview

This documentation outlines the functionality and data flow of the **Mexuri website** — from client interactions to data processing and admin notifications.

---

## 🚀 Workflow Summary

### 1. Client Interaction

- The client enters their **brand name** on the homepage.
- They proceed to complete a **survey form** that collects essential brand and business details.

### 2. Data Handling

- Upon completion, the survey data is sent to the **admin dashboard**.
- The system also triggers an **email notification** to the company’s official address:
  📧 **mexuri.info@gmail.com**

---

## ✉️ Email Format

- **Subject:**`${clientName} sent a Custom Request for Branding.`
- **Body:**
  `To view the full breakdown of ${clientName}'s request, please use the following link: ${link to admin page}`

---

## 🧩 Data Captured

The system collects and stores the following data fields from the client:

- **Brand Name** (entered on the homepage)
- **Product or Service**
- **Target Audience**
- **Brand Story**
- **Customer Impression**
- **Contact Information**

---

## 📤 Submission Process

When the client clicks the **“Finish”** button:

- All form data is **submitted** and sent directly to **mexuri.info@gmail.com**.
- The Mexuri team will then **review and contact** the client manually.

---

## 📁 File Structure & References

| Section               | File Path                                                  | Description                                       |
| --------------------- | ---------------------------------------------------------- | ------------------------------------------------- |
| **Homepage**    | `Mexuri Web/mexuri/src/pages/home/home.jsx`              | Brand name input form                             |
| **Survey Page** | `Mexuri Web/mexuri/src/pages/survey/survey.jsx`          | Client survey and data submission                 |
| **Admin Page**  | `mexuri/src/pages/admin/` *(to be created by Chimela)* | Backend dashboard for managing client submissions |

---

## ⚙️ Notes

- Ensure form submission logic and email integration remain synchronized with the admin dashboard.
- All client data must be managed securely and in compliance with standard data protection practices.
- This documentation covers the **core functionality** of the initial Mexuri website build.

---

### © Mexuri — 2025

Building brands that tell stories and stand out globally.
