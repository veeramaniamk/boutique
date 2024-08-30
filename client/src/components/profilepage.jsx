import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "",
    address: "",
    user_id:""
  });

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("data"));
console.log(storedUserData);

    if (storedUserData) {
      setProfileData({
        name: storedUserData.name || "",
        phone: storedUserData.phone || "",
        email: storedUserData.email || "",
        gender: storedUserData.gender || "",
        address: storedUserData.address || "" ,
        user_id: storedUserData.id || "" 
         // Assuming the address is part of the user data
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // Debugging: Log the data being sent to the API
      console.log("Profile Data being sent:", profileData);

      const response = await axios.post(
        `http://localhost:1000/user/update_user`,
        profileData
      );

      if (response.status === 200) {
        localStorage.setItem("data", JSON.stringify(profileData));
        alert('Profile updated successfully');
      } else {
        alert('Error updating profile. Please try again.');
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert('Error updating profile. Please try again.');
    }
  };

  return (
    <section className="bg-light py-3 py-md-5 register-back-img">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <div className="card border border-light-subtle rounded-3 shadow-sm">
              <div className="card-body p-3 p-md-4">
                <h2 className="bout-reg">Profile</h2>
                <form onSubmit={handleUpdate}>
                  <div className="row gy-2 overflow-hidden">
                    <div className="col-12">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Name"
                          value={profileData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          id="phone"
                          placeholder="Phone Number"
                          value={profileData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                          value={profileData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <select
                          className="form-control"
                          name="gender"
                          id="gender"
                          value={profileData.gender}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid my-1">
                        <button className="sign-color" type="submit">
                          Edit Profile
                        </button>
                      </div>
                    </div>
                    <div className="col-12"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
