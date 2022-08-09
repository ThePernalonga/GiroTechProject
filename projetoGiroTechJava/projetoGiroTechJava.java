public class projetoGiroTechJava {
  public static void main(String[] args) {

    if(args.length != 3) {
      System.out.println("Usage: java projetoGiroTechJava <capital> <taxa> <meses>");
      System.exit(1);
    }

    double capital = Double.parseDouble(args[0]);
    double taxa = Double.parseDouble(args[1]);
    int meses = Integer.parseInt(args[2]);

    double jurosComposto = capital * Math.pow(1 + taxa / 100, meses);

    String jurosCompostoString = String.format("%.2f", jurosComposto);
    String lucroString = String.format("%.2f", (jurosComposto - capital));
    String taxaString = String.format("%.2f", (jurosComposto - capital) / capital * 100);

    System.out.println("Juros Composto: " + jurosCompostoString);
    System.out.println("Lucro total: " + lucroString);
    System.out.println("Percentual de lucro: " + taxaString + "%");
    
  }

  public static double jurosComposto(double capital, double taxa, int meses) {
    double jurosComposto = capital * Math.pow(1 + taxa / 100, meses);
    return jurosComposto;
  }
}
