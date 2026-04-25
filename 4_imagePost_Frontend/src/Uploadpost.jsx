import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Uploadpost(){
    const navigate = useNavigate();
    const [imgName,setImageName] = useState('');
    function myfun2(evt){
        let file = evt.target.files[0]
        if(file){
            setImageName(file.name);
        }
    }
    async function myfun(evt){
        evt.preventDefault();
        const form = new FormData();  //Create an empty box
        form.append("caption",evt.target.caption.value);  //key-value
        form.append('postImage',evt.target.postImage.files[0]);  //whatshap 25-04 @3:19
        let response = await fetch("http://localhost:3000/post",{
            method:"post",
            body: form
        })
        alert("Image Uploaded!");
        navigate('/allpost');
    }
    return(
        <div className="page">
            <div className="card">
                <h2>Create Post</h2>

                <form className="form" onSubmit={myfun}>
                    <label className="file-input">
                        <input type="file" accept="image/*" required name="postImage" onChange={myfun2}/>
                        <span>
                            {imgName?imgName:"Upload Image"}
                        </span>
                    </label>

                    <textarea
                        placeholder="Write a caption..."
                        required name="caption"
                    ></textarea>

                    <button type="submit">Post</button>
                </form>
            </div>
        </div>
    )
}
export default Uploadpost;