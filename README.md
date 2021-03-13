# Test Site

Testing and Exercises


There are 8 basic data types in JavaScript.

* **number** for numbers of any kind: integer or floating-point, integers are limited by **±(253-1)**.
* **bigint** is for integer numbers of arbitrary length.
string for strings. A string may have zero or more characters, there’s no separate single-character type.
* **boolean** for **true**/**false**.
* **null** for unknown values – a standalone type that has a single value **null**.
* **undefined** for unassigned values – a standalone type that has a single value **undefined**.
* **object** for more complex data structures.
* **symbol** for unique identifiers.

The **typeof** operator allows us to see which type is stored in a variable.

* Two forms: **typeof x** or **typeof(x)**.
* Returns a string with the name of the type, like **"string"**.
* For **null** returns **"object"** = this is an error in the language, it's not actually an object 


**alert**\
shows a message.\
**prompt**\
shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, **null**.\
**confirm**\
shows a message and waits for the user to press “OK” or “Cancel”. It returns **true** for OK and **false** for Cancel/Esc.

All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.

There are two limitations shared by all the methods above:

1. The exact location of the modal window is determined by the browser. Usually, it’s in the center.
2. The exact look of the window also depends on the browser. We can’t modify it.

That is the price for simplicity. There are other ways to show nicer windows and richer interaction with the visitor, but if “bells and whistles” do not matter much, these methods work just fine.
## My contacts

[Telegram](https://t.me/vincvader)

[VK](https://vk.com/vincvader)

[E-Mail](mailto:vincvader@mail.ru)
