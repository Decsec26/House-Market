import { fetchSinToken } from "../helpers/fetch_auth";


export const crearBlog = (usuario, titulo, descripcion, contenido, img) => {
    return async (dispatch) => {
        console.log(usuario, titulo, descripcion, contenido, img)
        const resp = await fetchSinToken(
            "blog/new/blog",
            {usuario, titulo, descripcion, contenido, img},
            "POST"
        );
        console.log(resp)
        const body = await resp.json();
          console.log(body)
        if (body.ok) {
            console.log("body.ok")
        } else {
            // Swal.fire("Error", body.msg, "error");
            console.Console("error", body.msg);
        }
  };
};