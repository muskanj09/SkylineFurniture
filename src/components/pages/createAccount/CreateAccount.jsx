import React from 'react'
import '../createAccount/createAccount.css'
const CreateAccount = () => {
  return <>
    <section className='section-createAccount'>
      <div className="account-grid">
        <div className="account-flex">
          <div className="your-info">
            <p>Your Info</p>
            <div>
              <label htmlFor="">Full Name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Email (This will be your username)</label>
              <input type="email" name="email" id="email"/>
            </div>
            <div>
              <label htmlFor="">Phone</label>
              <input type="text" name="phone" id="phone" />
            </div>
          </div>
          <div className="company-info">
            <p>Company Info</p>
            <div>
              <label htmlFor="">Company Name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Company Website</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Fedral Tax ID</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Company Type</label> <br/>
              <select name="companyType" id="CompanyType">
                <option value=""></option>
                <option value="">Bricks & Mortal Retailer</option>
                <option value="">Builder</option>
                <option value="">Design Firm, Residential</option>
                <option value="">Design Firm, Commercial</option>
                <option value="">Design Firm, Model Homes</option>
                <option value="">E-Commerce Retailer</option>
                <option value="">Interior Designer</option>
                <option value="">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="">No of Employees</label> <br/>
              <select name="noOfEmployess" id="noOfEmployees">
                <option value=""></option>
                <option value="">0-50</option>
                <option value="">50-100</option>
                <option value="">100-300</option>
                <option value="">300-500</option>
                <option value="">500+</option>
              </select>
            </div>
            <div>
              <label htmlFor="">No of Retail Stores or Office Locations</label> <br/>
              <select name="retailStores" id="retailStores">
                <option value=""></option>
                <option value="">1</option>
                <option value="">2-5</option>
                <option value="">5-10</option>
                <option value="">10+</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Company Description</label>
              <textarea name="" id=""></textarea>
            </div>
          </div>
        </div>
        <div className="account-flex">
          <div className="company-address">
            <p>Company Address</p>
            <div>
              <label htmlFor="">Address</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Apt. Suite. Building (Optional)</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Address Type</label>
              <select name="addressType" id="addressType">
                <option value=""></option>
                <option value="">Residential</option>
                <option value="">Commercial (with dock)</option>
                <option value="">Commercial (no dock)</option>
              </select>
            </div>
          </div>
          <div className="shipping">
            <p>Shipping</p>
            <div>
              <label htmlFor="">Shipping Preference</label>
              <select name="shipping" id="shipping">
                <option value="">Standard Shipping</option>
                <option value="">Use My Account</option>
              </select>
            </div>
          </div>
          <div className="feedback">
            <p>Let Us Know</p>
            <div>
              <label htmlFor="">How Did you Hear About Skyline Furniture?</label>
              <textarea name="" id=""></textarea>
            </div>
          </div>
          <div className="submit">
            <button>Submit</button>
          </div>
        </div>
      </div>

    </section>
  </>
}

export default CreateAccount