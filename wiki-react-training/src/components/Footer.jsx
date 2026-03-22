function Footer() {
  return (
    <footer style={{
        padding: "20px", 
        background: "linear-gradient(90deg, #e9f1fe, #b4bffe)",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
        color: "#4c1d95",
        marginTop: "50px"
        }}>

           
      <p style={{ fontSize: "14px", fontWeight: "500", color: "#2c21a8", marginBottom: "20px" }}>
        © 2026 Cornell iGEM</p>
      <p style={{ fontSize: "16px", fontWeight: "500", color: "#2128a8", marginBottom: "20px" }}>
        Follow us on social media!
      </p>
     
         <div
        style={{
          justifyContent: "center",
          gap: "40px",
          alignItems: "center"
        }}
      >
        <a
          href="https://www.linkedin.com/company/cornell-igem/"
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQUlEQVR4nO2av2sUQRzFP/4Egyamy48ilWhhKkXQ3uokVomthU36aMBCBMVGsdG/wFbEThBMEIMQTGGqICIWioISJCaiETUrX3kLy5Kdm93s5WZxHizcvXk3897t/Nqbg4iIiKo4A8wA34Cky9eavLTKhrgegPmk4LpW5k7YB9aBKWCQ7mMQuChPie+dmZXYQoSGS/Jm3awt1iQeIDwMyNuqjzjti6Ei8fX3XwQ5CTwCPgEfgYfA0Xp9dj6IzWa/N5kOfwDHaFCQRfG2xhwE9mtON+5J/X47F+Sr+J4M1yvOyhoT5Kn4G0CfQlwVN1+/384FsXHwfZMxYqvtcRo2ax0C7gHvgA9NnbVCQbLVIM8dO9I5T80e4BzwAHivbrmiGfEWcGQ7grTbXvtoXrUp/wXcBnZvRxAX7/MlLAEXgBFgL3AAOAXcBX5KY2NvZ4hBbPXfAK44DBpOAJ9Vx3RJf5UMF/FFmnFgIvN+l6P906pjReuVr49Khot4VyO2rbkDLEtjm86b6lp5PJZmMrQgtq15mSn/k3m9AOzL6c+r7H5oQS6Lfw2Malay8fBWvD3CZnFY/JvQgiyIH8vxZ8W/yPF9mXESVJAv4vtzfL94K89ih/iN0IK4Gt9Ke07EIMQgxCAuxCDEIMQgLrSroOjy1VSpt9Ygc47GnpXQVKm31iChIPH1typhCEdueQyX+Yl2RmI7swsN02WO3loSr+uBZ4juY0gh0l9ZvI+p0+OCRh9Pp2jpFqaHo438w0BERAT/8BflE3u12wJrWAAAAABJRU5ErkJggg==" alt="linkedin"/>
        </a>

        <a
          href="https://www.youtube.com/user/CornelliGEM"
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADIUlEQVR4nO2ZW4hNURjHf8YZoVwGo1xybRgh5TaFUi4zRCjhBcmkSCgKaR6QGEnJ5cHlQV6UkdyinPGklJjJJTPGeBITwsgw4zaOVv13rU7Zt7OZ/bB/tep0zn9937fWXpdvfwcSEhISEhISfJMPjAEWARuAPcBp4BJQDTwAGoG3wEe1ViBjtRbrt9fAc/W7DVwBTgG7gfXyMxUYBKTIkWHAPuAx8CMrqP/ZvgEXNbDArAW+ZBls0uyfBfYDm4EVwFw5KQYGAgVq3bNs9rJ+GwCMVj/TfxmwUU/6DHAdaMiawJ/A1iCDMI+1XZ3NY58n5x1BCijREjbx/AYW++nYGXipToeATsSHw4qrxo94gsRvothkEdPDOkCGeImXSniTeFKj+Mq8hNskPEE8Oa/4NnkJj0oY6HSwSAPj+XfsVXzHvYRXJVwS0lFGR6aZkD5Ez0r5MBPmyl0Jp4V0ZN87H7QETFYQFSWy/dRL+FBCc3qFwRnEZetzHTCfaBgpm++8hI0SFoV05ARvmA08sb67oXwtF/rL1i+vO65JQpNq5DoQQx6wWsmkk2acBApD2u9q+TCf/8oniUxeFMVAHHoDlUoAM8qAdwBdQvj4Lhs93UROkpYf8UAcirXEctk/79XXLLMOG8go4JqlMxnuwoA+Pvt5Is0SFcR0aaWUAXtu9ldyNJh4bvZ+1h3lSoOEZi3nOpBZwCPrO3MbjyM3imTrhZewVsLJMb0Qp/h9J7kjobnM4piilFlvrq5USVge0lEU+8CNdfJxzlUFHJDQFBfCEEUa4kal4jNlI1fKrbwojlQpvlVewpkSNuvojBu1im+6l7DQKgWZEyJOdAO+Kj5zn3iS1kBuRXziRFUOqvbbYaJVdrkPLAiZpUZBStVI515qC1o6LbPSCudIfaYa7EFgC7AcmAGMBYYqP8sLEGBfYAQwCZijDbwdOKLKYp2VsmeU9ZoqaGDMftmpp9IWoOjcblXds5uTufptrfK/yytt94uZ6eFAKbAGqACOARe0p+4B9fq7wAm6xeNvhXr1S8uOsVch+6XyF8eTMyEhISEhgdjyBx2fSCOs75EOAAAAAElFTkSuQmCC" alt="youtube-play--v1"/>
        </a>

        <a
          href="https://www.instagram.com/cugem/?hl=en"
              >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADK0lEQVR4nO2ZO09UQRiGnwIVIpddy6UVwViIgp2X2ElMVH4BISp/QAWpvbRGQqnBP6CYWMnitVN7EWxUbAUFhArXfMl7komB3TmX3Tkm+yaTnOz55jvz7nzXGWiiiVygF5gA5oEFYAOoZDRMl+ksA+PAoXoQGAReZLho3zEPDGRBYA8wDfyR4h/AA+CCdmc/2cF0mc6LwEN9q6JvTwEtSRUXgZdS9hu4BXTSOHQCt4FNZ3cKSXYiMqXvMq1QOAp80VreAHvjTJ7WxG9AifAoActa033fSYOySzOnY+QHx2Vm23quicikzCfyhjtam4Xoquh1olMjHTvCefmkmdHQDu+7gBWtsaeaogkJWfgLgWUnh5h/7oQZvb9RTVFZQhbL80pkWO/nqilalFCa8sDyzyjwFPik0mNDz7N6ZzI7YUhkjMS5GuZv+nbFmoQ6EhBoAyaBnx6lxypwE2hN8J0O6bC17oroQ0ni/Adn/nPgilPG2OjTb3OO3PuEeapSa51JiJRkCtF2n/SYc8ox4yRJt5I1kTZnJ17FrIXMT15r7ruYZlbJmsik5BeSFHQiE+2Mhf4gRIqOY/uY02444wSAYggio45jp0WUv0ZCEJmV7GXS46p0PQ5BJLJtC7Fp0eeT5OpFZF2y7aRHu3St/+9EOqXrl6d807SqObuVHWkxFtLZR33KaU/Mhwy/RSUxkz9Ncpx1EmIhdImyGCMru7A5Sz4dX72JtKoUr6gAjEPmAPA2L0Xjv2X8kmonH3P6nKcyPkJJ/2o0v6xIdFh5pl3PY45jRztRl8ZqLUWr26pSfNWz1bWrg331anUXMzh8KCiMPlGfsq6xoN9GEvYusQ4fQh8H+WDYp30YD3xA54NHWuO1PB+Z1oL3kSlOVLFLlrzhbpyudEDXCpu+x/cNwiCwpWuFft9JU2Jux5fdhEe3cy58L87EFsfE7Jj/BOHQD3x1Em3sS9GCQ2ZTlyzmbI1Cl3xiy2kXEuefFt3ZbUvZiu4nLqmry6LNjWC6+pQnZpzotC1zSnw97eII8Myj9Mh6lOsVcHrUN8w55UdWizZdHxVarwMH60GgiSaIh7/0wax6IqjhkwAAAABJRU5ErkJggg==" alt="instagram-new--v1" />
        </a>
      </div>
    </footer>
  )
}

export default Footer