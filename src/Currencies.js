import { Component } from "react";
import axios from "axios";
class Currencies extends Component  {
     handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
    };

    try {
      await axios.get("http://127.0.0.1:8000/api/currencies", data);

      alert("Register berhasil, silakan login");

      window.location.href = "/";

    } catch (err) {
      console.log(err);
      alert("Register gagal");
    }
  };
    
    render() {
        return (
             <div className="container mt-5">
                <div className="text-start">
                      <button className="btn btn-success">Tambah Data</button>
                </div>
              
                
           <table className="table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Symbol</th>
                    <th>Code</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Rupiah</td>
                    <td>Rp</td>
                    <td>IDR</td>
                    <td>
                        <button className="btn btn-warning m-2">Edit</button>
                        <button className="btn btn-danger m-2">Hapus</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Dolar</td>
                    <td>$</td>
                    <td>USD</td>
                    <td>
                        <button className="btn btn-warning m-2">Edit</button>
                        <button className="btn btn-danger m-2">Hapus</button>
                    </td>
                </tr>
            </tbody>

           </table>
            </div>
        )
    }
}

export default Currencies;