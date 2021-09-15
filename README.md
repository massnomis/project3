## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/massnomis/project3/edit/main/README.md) to maintain and preview the content for your website in Markdown files.

<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <!--Let browser know website is optimized for mobile-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <!-- Compiled and minified Materialize CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" integrity="sha256-OweaP/Ic6rsV+lysfyS4h+LM6sRwuO3euTYfr6M124g=" crossorigin="anonymous" />
  <!-- FontAwesome icons -->
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
</head>

<body class="grey lighten-3">

  <div class="container" style="text-align: center">

    <h3>MartianMarket</h3>
    <p>Welcome to the Martian Land Foundation's open marketplace. This market serves to raise funds for the Mars development project
      by auctioning land to the masses.
    </p>
    <div id="dapp-tokens" class="row">
      <div class="card">
        <div class="card-image">
          <img id="dapp-image" src="">
          <span id="dapp-name" class="card-title">Landmark Name</span>
        </div>
        <div class="card-action">
          <a id="dapp-bid" href="#">Bid</a>
        </div>
      </div>
    </div>


    <div class="col s12 m6 dapp-admin">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title"><input id="dapp-register-name" placeholder="Landmark name..." /></span>
          <p>Image: <input id="dapp-copyright-image" type="file" /></p>

          <p><input id="dapp-pinata-api-key" placeholder="Pinata API Key"/></p>
          <p><input id="dapp-pinata-secret-api-key" placeholder="Pinata Secret API Key" type="password" /></p>
          <p>Note: Pinata requests are done locally via your browser. Your keys are not shared with any party except Pinata.</p>
          <br/>
        </div>
        <div class="card-action">
          <a id="dapp-register" href="#" onclick="dApp.registerLand()">Register Land</a>
        </div>
      </div>
    </div>

  </div>

  <!-- JQuery 3.4.1 slim minified -->
  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8=" crossorigin="anonymous"></script>
  <!-- Compiled and minified JavaScript for Materialize CSS -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" integrity="sha256-U/cHDMTIHCeMcvehBv1xQ052bPSbJtbuiw4QA9cTKz0=" crossorigin="anonymous"></script>
  <!-- Web3.js -->
  <script src="https://cdn.jsdelivr.net/npm/web3@1.2.5-rc.0/dist/web3.min.js" integrity="sha256-ZjUHyLZZWkQPbWfRjTSmGtfcTSOermVT6f/CvJW2RY4=" crossorigin="anonymous"></script>
  <!-- dApp JavaScript -->
  <script src="dapp.js"></script>

</body>
</html>


For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/massnomis/project3/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
