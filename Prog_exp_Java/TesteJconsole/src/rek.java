import java.util.ArrayList;

public class rek {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Thread t = new Thread() {
		    public void run() {
		    	try {
					sleep(10);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				ArrayList<Test> list = new ArrayList<Test>();
				while(true){
					list.add(new Test());
					if(list.size() == 1000000){
						list.clear();
					}
				}
		    }
		};
		t.start();
	}

}
