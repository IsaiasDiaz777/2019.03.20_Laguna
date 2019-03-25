$(document).ready(function () { AgregarMenu(); AgregarFooter(); });
function AgregarMenu(){
    var menu = document.getElementById("menu");
    menu.innerHTML = '<div class="topbar" id="top">'+
    '<div class="header6">'+
        '<div class="container po-relative">'+
            '<nav class="navbar navbar-expand-lg h6-nav-bar">'+
                '<a href="index.html" class="navbar-brand"><img src="../assets/images/logos/white-text.png"'+
                        'alt="wrapkit" /></a>'+
                '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#h6-info"'+
                    'aria-controls="h6-info" aria-expanded="false" aria-label="Toggle navigation"><span'+
                        'class="ti-menu"></span></button>'+
                '<div class="collapse navbar-collapse hover-dropdown font-14 ml-auto" id="h6-info">'+
                    '<ul class="navbar-nav ml-auto">'+
                        '<li class="nav-item">'+
                            '<a class="nav-link" href="index.html#element">'+
                                '<strong>Inicio</strong>'+
                            '</a>'+
                        '</li>'+
                        '<li class="nav-item">'+
                            '<a class="nav-link" href="#section">'+
                                '<strong>Noticias</strong>'+
                            '</a>'+
                        '</li>'+
                        '<li class="nav-item dropdown">'+
                            '<a class="nav-link dropdown-toggle" href="#" id="h1-dropdown" data-toggle="dropdown"'+
                                'aria-haspopup="true" aria-expanded="false">'+
                                '<strong>Institución</strong> <i class="fa fa-angle-down m-l-5"></i>'+
                            '</a>'+
                            '<ul class="b-none dropdown-menu animated fadeInUp p-0">'+
                                '<li><a class="dropdown-item" href="historia_asociacion.html">Historia</a></li>'+
                                '<li><a class="dropdown-item" href="#">Directorio</a></li>'+
                                '<li><a class="dropdown-item" href="#">Documentos Institucionales</a></li>'+
                            '</ul>'+
                        '</li>'+
                        '<li class="nav-item dropdown">'+
                            '<a class="nav-link dropdown-toggle" href="#" id="h1-dropdown" data-toggle="dropdown"'+
                                'aria-haspopup="true" aria-expanded="false">'+
                                '<strong>Área deportiva</strong> <i class="fa fa-angle-down m-l-5"></i>'+
                            '</a>'+
                            '<ul class="b-none dropdown-menu animated fadeInUp p-0">'+
                                '<li><a class="dropdown-item" href="#">Fixture</a></li>'+
                                '<li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle"'+
                                        'href="#">Tabla de posiciones <i class="fa fa-angle-down m-l-5"></i></a>'+
                                    '<ul class="dropdown-menu">'+
                                        '<li><a class="dropdown-item" href="#">General</a></li>'+
                                        '<li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle"'+
                                                'href="#">Categorías <i class="fa fa-angle-down m-l-5"></i></a>'+
                                            '<ul class="dropdown-menu">'+
                                                '<li><a class="dropdown-item" href="#">Tercera Infantil</a></li>'+
                                                '<li><a class="dropdown-item" href="#">Segunda Infantil</a></li>'+
                                                '<li><a class="dropdown-item" href="#">Primera Infantil</a></li>'+
                                                '<li><a class="dropdown-item" href="#">Juvenil</a></li>'+
                                                '<li><a class="dropdown-item" href="#">Primera Adulto</a></li>'+
                                                '<li><a class="dropdown-item" href="#">Segunda Adulto</a></li>'+
                                                '<li><a class="dropdown-item" href="#">Reserva</a></li>'+
                                                '<li><a class="dropdown-item" href="#">Senior</a></li>'+
                                            '</ul>'+
                                        '</li>'+
                                    '</ul>'+
                                '</li>'+
                                '<li><a class="dropdown-item" href="#">Resultados</a></li>'+
                                '<li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle"'+
                                        'href="#">Goleadores <i class="fa fa-angle-down m-l-5"></i></a>'+
                                    '<ul class="dropdown-menu">'+
                                        '<li><a class="dropdown-item" href="#">General</a></li>'+
                                        '<li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle"'+
                                                'href="#">Categorías <i class="fa fa-angle-down m-l-5"></i></a>'+
                                            '<ul class="dropdown-menu">'+
                                                '<li><a class="dropdown-item" href="#">Tercera Infantil</a></li>'+
                                                '<li><a class="dropdown-item" href="#">Segunda Infantil</a></li>'+
                                                '<li><a class="dropdown-item" href="#">Primera Infantil</a></li>'+
                                                '<li><a class="dropdown-item" href="#">Juvenil</a></li>'+
                                                '<li><a class="dropdown-item" href="#">Primera Adulto</a></li>'+
                                                '<li><a class="dropdown-item" href="#">Segunda Adulto</a></li>'+
                                                '<li><a class="dropdown-item" href="#">Reserva</a></li>'+
                                                '<li><a class="dropdown-item" href="#">Senior</a></li>'+
                                            '</ul>'+
                                        '</li>'+
                                    '</ul>'+
                                '</li>'+
                                '<li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle"'+
                                        'href="#">Clubes <i class="fa fa-angle-down m-l-5"></i></a>'+
                                    '<ul class="dropdown-menu">'+
                                        '<li><a class="dropdown-item" href="#">Salles</a></li>'+
                                        '<li><a class="dropdown-item" href="#">Bangu</a></li>'+
                                        '<li><a class="dropdown-item" href="#">Montevideo</a></li>'+
                                    '</ul>'+
                                '</li>'+
                            '</ul>'+
                        '</li>'+
                        '<li class="nav-item">'+
                            '<a class="nav-link" href="#section">'+
                                '<strong>Contacto</strong>'+
                            '</a>'+
                        '</li>'+
                    '</ul>'+
                    '<div class="act-buttons">'+
                        '<a href="https://wrappixel.com/templates/wrapkit/"'+
                            'class="btn btn-danger-gradiant font-14">Iniciar sesión</a>'+
                    '</div>'+
                '</div>'+
            '</nav>'+
        '</div>'+
    '</div>'+
'</div>';
}
function AgregarFooter(){}