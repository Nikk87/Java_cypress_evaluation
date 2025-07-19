import model.Student;
import utils.NoMarksException;
public class Main {
  public static void main(String[] args) {
	  int[]marks1= {85,78,90,76};
	  int[]marks2= {60,58,70,69};
	  
	  Student s1= new Student("Alice",20,101,marks1);
	  Student s2= new Student("Bob",21,102,marks2);
	  
	  s1.displayinfo();
	  System.out.println("Scholership Eligible:"+s1.isEligible());
	  System.out.println("||");
	  s2.displayinfo();
	  System.out.println("Scholership Eligible:"+s2.isEligible());
	  
  }
}
