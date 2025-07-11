import React from 'react'

function QuienesSomos() {
  return (
    <div className="container d-flex justify-content-center py-5">
      <div className="w-100" style={{ maxWidth: '800px' }}>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="mb-4 mb-md-5">
              <div className="mb-3 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-geo" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
                </svg>
              </div>
              <h4 className="mb-2">Oficina</h4>
              <hr className="w-50 mb-3 border-dark-subtle" />
              <address className="m-0 text-secondary">José Bonifacio 1800, Caballito, Buenos Aires, Argentina</address>
            </div>

            <div className="row mb-sm-4 mb-md-5">
              <div className="col-12 col-sm-6">
                <div className="mb-4 mb-sm-0">
                  <div className="mb-3 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-telephone-outbound" viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
                    </svg>
                  </div>
                  <h4 className="mb-2">Teléfono</h4>
                  <hr className="w-75 mb-3 border-dark-subtle" />
                  <p className="mb-0">
                    <a className="link-secondary text-decoration-none" href="tel:+541147922430">54 11 9247-3024</a>
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="mb-4 mb-sm-0">
                  <div className="mb-3 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
                      <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Z" />
                      <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Z" />
                    </svg>
                  </div>
                  <h4 className="mb-2">Email</h4>
                  <hr className="w-75 mb-3 border-dark-subtle" />
                  <p className="mb-0">
                    <a className="link-secondary text-decoration-none" href="mailto:kanteralon@gmail.com">kanteralon@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-3 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-alarm" viewBox="0 0 16 16">
                  <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3Z" />
                </svg>
              </div>
              <h4 className="mb-2">Horario de apertura</h4>
              <hr className="w-50 mb-3 border-dark-subtle" />
              <div className="d-flex mb-1">
                <p className="text-secondary fw-bold mb-0 me-5">Lun - Vie</p>
                <p className="text-secondary mb-0">9am - 5pm</p>
              </div>
              <div className="d-flex">
                <p className="text-secondary fw-bold mb-0 me-5">Sab - Dom</p>
                <p className="text-secondary mb-0">9am - 2pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuienesSomos