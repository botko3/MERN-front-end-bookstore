import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";








const EditBooks = () => {
  const { id } = useParams();
  const {
    bookTitle,
    authorName,
    imageUrl,
    category,
    bookDescription,
    bookPDFUrl,
  } = useLoaderData();
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

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const bookCategory = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFUrl = form.bookPDFUrl.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageUrl,
      bookCategory,
      bookDescription,
      bookPDFUrl,
    };

    //update book data
    fetch(`http://mern-bookstore-api.onrender.com/book/${id}`,
    {
      method:"PUT",
      headers:{
        "Content-type":"application/json"


      },
      body:JSON.stringify(updateBookObj)
      
    }).then(res=>res.json()).then(data=>{
      alert("Book Info Updated successfully!")
      form.reset();
    })

    
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Edit Book Info</h2>
      <form className="lg:w-[1080px]" onSubmit={handleUpdate}>
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
              defaultValue={bookTitle}
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
              defaultValue={authorName}
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
              defaultValue={imageUrl}
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
              defaultValue={category}
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
            defaultValue={bookDescription}
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
            defaultValue={bookPDFUrl}
          />
        </div>

        <Button className="ml-2 mt-5" type="submit">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
