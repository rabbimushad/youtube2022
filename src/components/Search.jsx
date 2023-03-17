import React from 'react'

const Search = () => {
  return (
      <>
          <div className="container-fluid m-3 mt-4">
              <form className="d-flex">
                  <input className="form-control me-sm-2 bg-dark p-2 border" type="search" placeholder="বেস্ট ফ্রী AI টুলটি খুঁজুন ..."/>
                  <button className="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
              </form>
          </div>
      </>
  )
}

export default Search