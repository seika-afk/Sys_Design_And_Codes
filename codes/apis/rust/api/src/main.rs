use actix_web::{
    get, post,
    App, 
    HttpServer,
    Responder, HttpResponse,
};


#[get("/user")]
async fn get() -> impl Responder {
    HttpResponse::Ok().json(
        serde_json::json!({
            "message": "GET REQUEST RECEIVED"
        })
    )
}

#[post("/user")]
async fn post() -> impl Responder {
    HttpResponse::Ok().json(
        serde_json::json!({
            "message": "POST REQUEST RECEIVED"
        })
    )
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {

    println!("Server running at http://localhost:3000");

    HttpServer::new(|| {
        App::new()
            .service(get)
            .service(post)
    })
    .bind(("127.0.0.1", 3000))?
    .run()
    .await
}
