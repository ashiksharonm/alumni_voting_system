/*  Login JSX */


<div className="container">
<img src={LICETLogo} alt="LICET Logo" className="logo" />
<h1 className="election-title" style={{"fontSize": "35px"}}>LICET ALUMNI ASSOCIATION ELECTION</h1>
<br />
<div className="login-card">
  <form>
    <label htmlFor="regno">Registration Number</label>
    <input required
      type="text"
      id="regno"
      name="regno"
      onChange={handleChange}
      placeholder="Eg. 311XXXXXXXXX"
    />
    <br />
    <label htmlFor="dob">Date of Birth</label>
    <input required
      type="text"
      id="dob"
      name="dob"
      onChange={handleChange}
      placeholder="DD-MM-YYYY"
    />
    <br />
    <br />
    <input type="submit" onClick={hsubmit} disabled={!isInputValid } value="Login" />
    {err && <p>{err}</p>}
  </form>
</div>
</div>