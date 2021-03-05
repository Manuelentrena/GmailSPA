/* Icono de Estrella del mensaje */
function iconStart(width, height, id) {
  return `
    <svg
      viewBox="0 -10 511.98685 511"
      height=${height}px
      width=${width}px
      id="start"
      class="start"
      data-email="${id}"
    >
      <path
        d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0"
        fill=""
      />
    </svg>
  `;
}

export { iconStart };

/* Icono de Importantes del mensaje */
function iconFlag(width, height, id) {
  return `
    <svg
      viewBox="0 0 416.6 299.3"
      height=${height}px
      width=${width}px
      id="flag"
      class="flag"
      data-email="${id}"
    >
      <path
        d="M414.5,50.8c-3.2-5.4-9.4-8.2-15.6-7.1c-74.2,13.7-131.5-3.9-186.8-20.8C146.6,2.8,84.7-16.2,8.3,22.1
      C3.2,24.6,0,29.8,0,35.5v242.2l7.3-4.4c0.3-0.2,0.6-0.4,1-0.5c76.4-38.2,138.3-19.3,203.8,0.8c55.4,17,112.6,34.5,186.8,20.8
      c0.3-0.1,0.7-0.1,1-0.2l8-0.9l-90.5-107.8l95.8-117.6C417.2,63,417.7,56.2,414.5,50.8z" fill=""
      />
    </svg>
  `;
}

export { iconFlag };

/* Icono Clip del mensaje */
function iconClip(width, height, id) {
  return `
    <svg
      viewBox="0 0 509.478 509.478"
      height=${height}px
      width=${width}px
      data-email="${id}"
    >
      <path 
        d="M0,114.6C0,51.4,51.4,0,114.6,0h312.7C474,0,512,38,512,84.7c0,46.7-38,84.7-84.7,84.7H173.7c-30.1,0-54.6-24.5-54.6-54.6
		c0-30.1,24.5-54.6,54.6-54.6h186.1v30.1H173.7c-13.5,0-24.4,11-24.4,24.4c0,13.5,11,24.4,24.4,24.4h253.6
		c30.1,0,54.6-24.5,54.6-54.6c0-30.1-24.5-54.6-54.6-54.6H114.6C68,30.1,30.1,68,30.1,114.6S68,199,114.6,199h240.7v30.1H114.6
		C51.4,229.1,0,177.7,0,114.6z"
        fill=""
      />
    </svg>
  `;
}

export { iconClip };

/* Icono Archivar del mensaje */
function iconFile(width, height, id) {
  return `
    <svg
      viewBox="0 0 43.3 43.2"
      height=${height}px
      width=${width}px
      data-email="${id}"
      class="iconover"
      id="iconFile"
    >
      <path 
        d="M36.4,0H7c-1,0-1.9,0.4-2.6,1.1L1.1,4.4C0.4,5.1,0,6,0,7v31.8c0,2.4,2,4.4,4.4,4.4h34.5c2.4,0,4.4-2,4.4-4.4V7
		    c0-1-0.4-1.9-1-2.6L39,1.1C38.4,0.4,37.4,0,36.4,0z M8.1,2.8h27.4c0.7,0,1.3,0.3,1.8,0.8l1,1c0.3,0.4,0.1,0.9-0.4,0.9l-4.9,0H5.6
		    c-0.5,0-0.7-0.6-0.4-1l1.1-1C6.8,3,7.4,2.8,8.1,2.8z M21.3,35.2L9.1,22.7c-0.3-0.4-0.1-1,0.4-1h6.3c0.3,0,0.6-0.2,0.6-0.6v-4.5
		    c0-0.3,0.2-0.6,0.6-0.6h9.7c0.3,0,0.6,0.2,0.6,0.6v4.5c0,0.3,0.2,0.6,0.6,0.6H34c0.5,0,0.7,0.6,0.4,1L22.1,35.2
		    C21.9,35.4,21.5,35.4,21.3,35.2z"
        fill=""
      />
    </svg>
  `;
}

export { iconFile };

/* Icono Eliminar del mensaje */
function iconDelete(width, height, id) {
  return `
    <svg
      viewBox="0 0 39.1 44.6"
      height=${height}px
      width=${width}px
      data-email="${id}"
      class="iconover"
      id="iconDelete"
    >
      <g fill="">
	      <path d="M27,44.6H12.2c-5.2,0-9.4-4.2-9.4-9.4V11.1h33.5v24.1C36.3,40.4,32.1,44.6,27,44.6z"/>
	      <polygon points="30.7,2.8 30.7,0 8.4,0 8.4,2.8 0,2.8 0,8.4 39.1,8.4 39.1,2.8 	"/>
      </g>
    </svg>
  `;
}

export { iconDelete };

/* Icono Leido del mensaje */
function iconRead(width, height, id) {
  return `
    <svg
      viewBox="0 0 42.5 39.7"
      height=${height}px
      width=${width}px
      data-email="${id}"
      class="iconover"
      id="iconRead"
    >
      <path 
        d="M21.2,0L0,13.2V33c0,3.7,3,6.7,6.7,6.7h29.1c3.7,0,6.7-3,6.7-6.7V13.2L21.2,0z M21.2,21.8L7.3,13.2l13.9-8.6l13.9,8.6
	      L21.2,21.8z"
        fill=""
      />
    </svg>
  `;
}

export { iconRead };

/* Icono NO Leido del mensaje */
function iconNotRead(width, height, id) {
  return `
    <svg
      viewBox="0 0 48 44.6"
      height=${height}px
      width=${width}px
      data-email="${id}"
      class="iconover"
      id="iconNotRead"
    >
      <g fill="">
        <path 
          d="M42,12.7H14c-3.3,0-6,2.7-6,6v19.9c0,3.3,2.7,6,6,6h28c3.3,0,6-2.7,6-6V18.7C48,15.4,45.3,12.7,42,12.7z M41.1,23.1
          L28,30.9l0,0l0,0l-13.1-7.8c-0.9-0.5-1.2-1.6-0.6-2.5c0.5-0.9,1.6-1.2,2.5-0.6l8.4,5c1.7,1,3.9,1,5.6,0l8.4-5
          c0.9-0.5,2-0.2,2.5,0.6C42.3,21.5,42,22.6,41.1,23.1z"
        />
        <path 
          d="M24.1,0.7c-1.8-0.9-3.9-0.9-5.7,0L0.1,9.8c-0.1,0.3-0.1,0.7-0.1,1v19.9c0,3,2.4,5.4,5.5,5.9c-0.1-0.3-0.1-0.6-0.1-0.9v-6.8
          V15.8v-6l13.9-4.5c1.3-0.4,2.7-0.4,4,0l14,4.5h5.4L24.1,0.7z"
        />
      </g>
    </svg>
  `;
}

export { iconNotRead };

/* Icono NO Leido del mensaje */
function iconPostpone(width, height, id) {
  return `
    <svg
      viewBox="0 0 43.9 43.9"
      height=${height}px
      width=${width}px
      data-email="${id}"
      class="iconover"
      id="iconPostpone"
    >
        <path 
          d="M21.9,0C9.8,0,0,9.8,0,21.9c0,12.1,9.8,21.9,21.9,21.9c12.1,0,21.9-9.8,21.9-21.9C43.9,9.8,34.1,0,21.9,0z M32.6,32.6
		      c-0.8,0.8-2.2,0.8-3,0l-9.7-9.7h0v-9c0-1.2,0.9-2.1,2.1-2.1c1.2,0,2.1,0.9,2.1,2.1v7.2l8.5,8.5C33.4,30.4,33.4,31.8,32.6,32.6z"
          fill=""
        />
    </svg>
  `;
}

export { iconPostpone };

/* Icono de Principal del Filtro */
function iconTray(width, height, id) {
  return `
    <svg
      viewBox="0 0 416.6 299.3"
      height=${height}px
      width=${width}px
      id=${id}
      class="filter__icon"
    >
    <path 
      d="M268,0.5H41.7C18.9,0.5,0.5,18.9,0.5,41.7V268c0,22.7,18.4,41.2,41.2,41.2H268c22.7,0,41.2-18.4,41.2-41.2V41.7
	    C309.1,18.9,290.7,0.5,268,0.5z M262.1,211.6l-42.6,0.6c-3.3,0-6.2,2.1-7.7,5c0,0,0,0,0,0c-11.5,19.9-39,27-56.6,27.2
	    c-18.8,0.2-45.8-7.9-54-23.5c-0.4-0.8-1.3-2.6-2.2-4.4c-1.4-3.1-4.5-5.1-7.9-5.1H47.6c-4.8,0-8.7-3.9-8.7-8.7V46.5
	    c0-4.8,3.9-8.7,8.7-8.7H262c4.8,0,8.7,3.9,8.7,8.7v156.3C270.8,207.6,266.9,211.5,262.1,211.6z" 
      fill=""
    />
      
    </svg>
  `;
}

export { iconTray };

/* Icono de Social del Filtro */
function iconSocial(width, height, id) {
  return `
    <svg
      viewBox="0 0 290.4 193.6"
      height=${height}px
      width=${width}px
      id=${id}
      class="filter__icon"
    >
      <g fill="">
        <circle cx="95.3" cy="44.3" r="44.3"/>
        <path d="M190.6,193.6H0v0c0-43.7,35.4-79.1,79.1-79.1h32.5C155.2,114.5,190.6,149.9,190.6,193.6L190.6,193.6z"/>
        <circle cx="200.5" cy="45" r="41.7"/>
        <path d="M215.8,111.2h-30.6c-10.6,0-20.6,2.2-29.7,6.2c26.4,11.5,44.8,37.7,44.8,68.3v0h90v0C290.4,144.6,257,111.2,215.8,111.2z"
      </g>
    </svg>
  `;
}

export { iconSocial };

/* Icono de Promociones del Filtro */
function iconPromotion(width, height, id) {
  return `
    <svg
      viewBox="0 0 196.1 196.5"
      height=${height}px
      width=${width}px
      id=${id}
      class="filter__icon"
    >
      <path 
        d="M80.5,0H0v81.5c0,5.1,2,10,5.6,13.6l95.9,95.9c7.5,7.5,19.6,7.5,27.1,0l61.8-61.8c7.5-7.5,7.5-19.6,0-27.1L94.1,5.6
	        C90.5,2,85.6,0,80.5,0z M45.1,63.8L45.1,63.8c-10.6,0-19.2-8.6-19.2-19.2v0c0-10.6,8.6-19.2,19.2-19.2h0c10.6,0,19.2,8.6,19.2,19.2
	        v0C64.2,55.2,55.6,63.8,45.1,63.8z"
        fill=""
      />
    </svg>
  `;
}

export { iconPromotion };

/* Icono de NOtificaciones del Filtro */
function iconNotifications(width, height, id) {
  return `
    <svg
      viewBox="0 0 121 121"
      height=${height}px
      width=${width}px
      id=${id}
      class="filter__icon"
    >
      <path 
        d="M60.5,0C27.1,0,0,27.1,0,60.5S27.1,121,60.5,121S121,93.9,121,60.5S93.9,0,60.5,0z M66.7,93.2H53.7V53.7h13.1V93.2z
	      M66.7,41H53.7V27.9h13.1V41z"
        fill=""
      />
    </svg>
  `;
}

export { iconNotifications };

/* Icono de Foros del Filtro */
function iconForums(width, height, id) {
  return `
    <svg
      viewBox="0 0 62.5 62.8"
      height=${height}px
      width=${width}px
      id=${id}
      class="filter__icon"
    >
      <g fill="">
        <path d="M52.5,13.3c0.3,1.2,0.5,2.5,0.5,3.8v9.4c0,7.7-6.3,14-14,14H15.9L14,42.3c2.3,4.6,7,7.8,12.5,7.8h23.2l12.8,12.7V50.1
                V26.7C62.5,20.3,58.3,15,52.5,13.3z"/>
        <path d="M36,0H14C6.3,0,0,6.3,0,14v23.4v12.7l12.8-12.7H36c7.7,0,14-6.3,14-14V14C50,6.3,43.7,0,36,0z"/>
      </g>
    </svg>
  `;
}

export { iconForums };

function iconInboxMenu(width, height) {
  return `
    <svg
      viewBox="0 0 51.1 51.1"
      height=${height}px
      width=${width}px
    >
    <path 
      d="M0,3.7v43.7c0,2.1,1.7,3.7,3.7,3.7h43.7c2.1,0,3.7-1.7,3.7-3.7V3.7c0-2.1-1.7-3.7-3.7-3.7H3.7C1.7,0,0,1.7,0,3.7z M41,35.1
	    l-5.1,0c-0.8,0-1.4,0.6-1.5,1.3C33.7,40.7,30,44,25.5,44s-8.2-3.3-8.8-7.6c-0.1-0.8-0.7-1.3-1.5-1.3l-5,0c-2.1,0-3.7-1.7-3.7-3.7
	    V10.2c0-2.1,1.7-3.7,3.7-3.7H41c2.1,0,3.7,1.7,3.7,3.7v21.1C44.7,33.4,43,35.1,41,35.1z"
      fill=""
    />
      
    </svg>
  `;
}

export { iconInboxMenu };

function iconStarMenu(width, height) {
  return `
    <svg
      viewBox="0 0 62.4 59.3"
      height=${height}px
      width=${width}px
    >
    <polygon 
      points="31.2,0 40.8,19.5 62.4,22.7 46.8,37.8 50.4,59.3 31.2,49.2 11.9,59.3 15.6,37.8 0,22.7 21.5,19.5 "
      fill=""
    />
    
    </svg>
  `;
}

export { iconStarMenu };

function iconImpMenu(width, height) {
  return `
    <svg
      viewBox="0 0 61.1 40.8"
      height=${height}px
      width=${width}px
    >
    <polygon 
    points="61.1,20.4 40.8,0 0,0 0,40.8 0,0 20.4,20.4 0,40.8 0,40.8 40.8,40.8 40.8,40.7 "
    fill=""
    />
    
    </svg>
  `;
}

export { iconImpMenu };

function iconTagMenu(width, height) {
  return `
    <svg
      viewBox="0 0 45.1 30.9"
      height=${height}px
      width=${width}px
    >
    <path 
      d="M44.3,13.3L32,1.1C31.3,0.4,30.4,0,29.4,0H3.7C1.7,0,0,1.7,0,3.7v23.5c0,2,1.7,3.7,3.7,3.7h27.2v0l13.3-13.3
      C45.4,16.4,45.4,14.5,44.3,13.3z"
      fill=""
    />
    
    </svg>
  `;
}

export { iconTagMenu };
