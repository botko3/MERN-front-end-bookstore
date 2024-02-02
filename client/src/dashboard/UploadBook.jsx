import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "Self-Help",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];
  const [selectBookCategory, setSelectBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectValue = (event) => {
    setSelectBookCategory(event.target.value);
  };

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const bookCategory = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFUrl = form.bookPDFUrl.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageUrl,
      bookCategory,
      bookDescription,
      bookPDFUrl,
    };

    fetch("http://mern-bookstore-api.onrender.com/upload-book",{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify(bookObj)
    }).then(res=>res.json()).then(data=>{
      alert("Book uploaded Successfully")
      form.reset();
    })
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>
      <form className="lg:w-[1080px]" onSubmit={handleBookSubmit}>
        {/* 第一行 */}
        <div className="flex flex-wrap lg:flex-nowrap  ">
          <div className="w-full lg:w-1/2 m-2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              name="bookTitle"
              id="bookTitle"
              type="text"
              placeholder="Book Name"
              required
            />
          </div>

          <div className="w-full lg:w-1/2 m-2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              name="authorName"
              id="authorName"
              type="text"
              placeholder="Author Name"
              required
            />
          </div>
        </div>

        {/* 第二行 */}
        <div className="flex flex-wrap lg:flex-nowrap ">
          <div className="w-full lg:w-1/2 m-2">
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Image Url" />
            </div>
            <TextInput
              name="imageUrl"
              id="imageUrl"
              type="text"
              placeholder="Book Image URL"
              required
            />
          </div>

          <div className="w-full lg:w-1/2 m-2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id="inputState"
              name="category"
              className="rounded"
              value={selectBookCategory}
              onChange={handleChangeSelectValue}
            >
              {bookCategories.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* book description */}
        <div className="w-full m-2">
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Leave a comment"
            required
            className="w-full"
            rows={6}
          />
        </div>

        {/* Book pdf */}
        <div className="w-full m-2">
          <div className="mb-2 block">
            <Label htmlFor="bookPDFUrl" value="Book PDF URL" />
          </div>
          <TextInput
            name="bookPDFUrl"
            id="bookPDFUrl"
            type="bookPDFUrl"
            placeholder="Book PDF URL"
            required
          />
        </div>

        <Button className="ml-2 mt-5" type="submit">
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
